import { NUM_RANKS } from '../constants/Settings'
import { timeToIndex } from './time'
import _ from 'lodash'

export function initializeCells() {
  const n = timeToIndex({day: 7})
  return Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0)
}

export function initializeOrder(numLocations) {
  return _.shuffle(_.range(1, numLocations + 1))
}

export function loadCells(cells) {
  return _.isEmpty(cells) ? initializeCells() : cells
}

export function loadLocationOrder(order, locations) {
  return _.isEmpty(order) ? initializeOrder(locations.length) : order
}

export function toggleCell(cells, index) {
  const cell = cells[index]
  return [
    ...cells.slice(0, index),
    cell >= NUM_RANKS ? 0 : cell + 1,
    ...cells.slice(index + 1)
  ]
}

export function getCellValue(cells, index) {
  return cells[index]
}

export function getAverageCellValue(cells) {
  return _.mean(_.filter(cells, _.identity))
}
