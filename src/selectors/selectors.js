import { createSelector } from 'reselect'

const selectState = state => state.data
const selectData = state => state.data.todos


export const selectNumOfDoneTodos = createSelector(
    selectData,
    todos => todos.map(todo => todo.completed).length
)

export const selectTodos = createSelector(
    selectState,
    data => data.todos,
    todos => todos.todos,
    // todos => todos.appTitle
)

export default selectNumOfDoneTodos 




// const shopItemsSelector = state => state.shop.items
// const taxPercentSelector = state => state.shop.taxPercent

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )

// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// let exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.20 },
//       { name: 'orange', value: 0.95 },
//     ]
//   }
// }

// console.log(subtotalSelector(exampleState)) // 2.15
// console.log(taxSelector(exampleState))      // 0.172
// console.log(totalSelector(exampleState)) 