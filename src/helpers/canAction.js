import { AbilityBuilder, Ability } from '@casl/ability';
import { USER_ROLE } from 'configs/userRole';

import { store } from 'stores';

function defineAbilitiesFor(role) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  switch (role) {
    case USER_ROLE.ADMIN:
      can(['create', 'view', 'update', 'delete'], 'all');
      break;
    case USER_ROLE.GUEST:
      cannot(['create', 'view', 'update', 'delete'], 'all');
      break;
    default:
      break;
  }

  return new Ability(build);
}
console.log('hello');
export default function canAction(action, resource) {
  const role = store.getState().app?.user?.user.role;

  if (!role) return false;

  const abilities = defineAbilitiesFor(role);

  return abilities.can(action, resource);
}
