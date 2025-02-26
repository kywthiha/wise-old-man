import { omit } from 'lodash';
import { z } from 'zod';
import prisma from '../../../../prisma';
import { PAGINATION_SCHEMA } from '../../../util/validation';
import { GroupListItem } from '../group.types';

const inputSchema = z
  .object({
    name: z.string().optional()
  })
  .merge(PAGINATION_SCHEMA);

type SearchGroupsParams = z.infer<typeof inputSchema>;

async function searchGroups(payload: SearchGroupsParams): Promise<GroupListItem[]> {
  const params = inputSchema.parse(payload);

  const groups = await prisma.group.findMany({
    where: {
      name: {
        contains: params.name,
        mode: 'insensitive'
      }
    },
    include: {
      _count: {
        select: {
          memberships: true
        }
      }
    },
    orderBy: [{ score: 'desc' }, { id: 'asc' }],
    take: params.limit,
    skip: params.offset
  });

  return groups.map(g => {
    return {
      ...omit(g, ['_count', 'verificationHash']),
      memberCount: g._count.memberships
    };
  });
}

export { searchGroups };
