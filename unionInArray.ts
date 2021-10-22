type ItemBase = {
  id: string;
}

type ItemToKeep = {
  type: 'keep';
  note: string;
} & ItemBase

type ItemToRemove = {
  type: 'remove';
  dateLastUsed: Date;
} & ItemBase

type Item = ItemToKeep | ItemToRemove

function getItemsToRemove(items: Item[]) {
  return items.filter(item => item.type === 'remove').sort((item1, item2) => item1.dateLastUsed.getTime() - item2.dateLastUsed.getTime())
}

const items: Item[] = [{type: 'keep', id: '1001', note: ''}, {type: 'remove', id: '1001', dateLastUsed: new Date()}]

console.log(getItemsToRemove(items));