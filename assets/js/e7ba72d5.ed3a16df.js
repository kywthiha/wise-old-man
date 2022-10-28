"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,g=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={title:"Group Types & Entities",sidebar_position:1},o="Group Types & Entities",l={unversionedId:"groups-api/group-type-definitions",id:"groups-api/group-type-definitions",title:"Group Types & Entities",description:"(Enum) Group Role",source:"@site/docs/groups-api/group-type-definitions.md",sourceDirName:"groups-api",slug:"/groups-api/group-type-definitions",permalink:"/groups-api/group-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/groups-api/group-type-definitions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Group Types & Entities",sidebar_position:1},sidebar:"sidebar",previous:{title:"Groups API",permalink:"/category/groups-api"},next:{title:"Records API",permalink:"/category/records-api"}},p={},d=[{value:"<code>(Enum)</code> Group Role",id:"enum-group-role",level:3},{value:"<code>(Object)</code> Group",id:"object-group",level:3},{value:"<code>(Object)</code> Membership",id:"object-membership",level:3},{value:"<code>(Object)</code> Group Membership",id:"object-group-membership",level:3},{value:"<code>(Object)</code> Player Membership",id:"object-player-membership",level:3}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"group-types--entities"},"Group Types & Entities"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"enum-group-role"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Group Role"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"'achiever', 'adamant', 'adept', 'administrator', 'admiral', 'adventurer', 'air', 'anchor', 'apothecary', 'archer', 'armadylean', 'artillery', 'artisan', 'asgarnian', 'assassin', 'assistant', 'astral', 'athlete', 'attacker', 'bandit', 'bandosian', 'barbarian', 'battlemage', 'beast', 'berserker', 'blisterwood', 'blood', 'blue', 'bob', 'body', 'brassican', 'brawler', 'brigadier', 'brigand', 'bronze', 'bruiser', 'bulwark', 'burglar', 'burnt', 'cadet', 'captain', 'carry', 'champion', 'chaos', 'cleric', 'collector', 'colonel', 'commander', 'competitor', 'completionist', 'constructor', 'cook', 'coordinator', 'corporal', 'cosmic', 'councillor', 'crafter', 'crew', 'crusader', 'cutpurse', 'death', 'defender', 'defiler', 'deputy_owner', 'destroyer', 'diamond', 'diseased', 'doctor', 'dogsbody', 'dragon', 'dragonstone', 'druid', 'duellist', 'earth', 'elite', 'emerald', 'enforcer', 'epic', 'executive', 'expert', 'explorer', 'farmer', 'feeder', 'fighter', 'fire', 'firemaker', 'firestarter', 'fisher', 'fletcher', 'forager', 'fremennik', 'gamer', 'gatherer', 'general', 'gnome_child', 'gnome_elder', 'goblin', 'gold', 'goon', 'green', 'grey', 'guardian', 'guthixian', 'harpoon', 'healer', 'hellcat', 'helper', 'herbologist', 'hero', 'holy', 'hoarder', 'hunter', 'ignitor', 'illusionist', 'imp', 'infantry', 'inquisitor', 'iron', 'jade', 'justiciar', 'kandarin', 'karamjan', 'kharidian', 'kitten', 'knight', 'labourer', 'law', 'leader', 'learner', 'legacy', 'legend', 'legionnaire', 'lieutenant', 'looter', 'lumberjack', 'magic', 'magician', 'major', 'maple', 'marshal', 'master', 'maxed', 'mediator', 'medic', 'mentor', 'member', 'merchant', 'mind', 'miner', 'minion', 'misthalinian', 'mithril', 'moderator', 'monarch', 'morytanian', 'mystic', 'myth', 'natural', 'nature', 'necromancer', 'ninja', 'noble', 'novice', 'nurse', 'oak', 'officer', 'onyx', 'opal', 'oracle', 'orange', 'owner', 'page', 'paladin', 'pawn', 'pilgrim', 'pine', 'pink', 'prefect', 'priest', 'private', 'prodigy', 'proselyte', 'prospector', 'protector', 'pure', 'purple', 'pyromancer', 'quester', 'racer', 'raider', 'ranger', 'record_chaser', 'recruit', 'recruiter', 'red_topaz', 'red', 'rogue', 'ruby', 'rune', 'runecrafter', 'sage', 'sapphire', 'saradominist', 'saviour', 'scavenger', 'scholar', 'scourge', 'scout', 'scribe', 'seer', 'senator', 'sentry', 'serenist', 'sergeant', 'shaman', 'sheriff', 'short_green_guy', 'skiller', 'skulled', 'slayer', 'smiter', 'smith', 'smuggler', 'sniper', 'soul', 'specialist', 'speed_runner', 'spellcaster', 'squire', 'staff', 'steel', 'strider', 'striker', 'summoner', 'superior', 'supervisor', 'teacher', 'templar', 'therapist', 'thief', 'tirannian', 'trialist', 'trickster', 'tzkal', 'tztok', 'unholy', 'vagrant', 'vanguard', 'walker', 'wanderer', 'warden', 'warlock', 'warrior', 'water', 'wild', 'willow', 'wily', 'wintumber', 'witch', 'wizard', 'worker', 'wrath', 'xerician', 'yellow', 'yew', 'zamorakian', 'zarosian', 'zealot', 'zenyte'\n")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clanChat"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's clan chat (1-12 characters).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"description"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's description.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"homeworld"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's homeworld.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"verified"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's verified status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"score"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's global ranking score.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's creation date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's last modification date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memberCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's total number of members.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Membership"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"playerId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"role"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#enum-group-role"},"GroupRole"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's role (rank) in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date at which the player was added as a member to the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date at which the membership was updated.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Membership"),(0,n.kt)("p",null,"Returned in group-centric endpoints."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"extends ",(0,n.kt)("a",{parentName:"p",href:"/groups-api/group-type-definitions#object-membership"},"Membership"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"player"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-player"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The membership's player.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-player-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Player Membership"),(0,n.kt)("p",null,"Returned in player-centric endpoints."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"extends ",(0,n.kt)("a",{parentName:"p",href:"/groups-api/group-type-definitions#object-membership"},"Membership"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"group"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group"},"Group")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group the player is a member in.")))),(0,n.kt)("br",null))}s.isMDXComponent=!0}}]);