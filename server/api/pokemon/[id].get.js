export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());

  const fetchTypeDetail = async (type) => {
    const { damage_relations: damageRelations } = await fetch(type.url)
      .then((res) => res.json());
    return {
      type: { name: type.name },
      weak: damageRelations.double_damage_from.map((item) => item.name),
      strong: damageRelations.double_damage_to.map((item) => item.name),
    };
  };

  const dataType = await Promise.all(data.types.map(
    (item) => fetchTypeDetail(item.type)));

  return {
    'id': data['id'],
    'stats': data['stats'],
    'types': dataType,
    'base_experience': data['base_experience'],
    'name': data['name']
  };
});
