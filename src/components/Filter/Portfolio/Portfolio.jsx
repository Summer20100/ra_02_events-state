import s from './Portfolio.module.css'
import { useState } from 'react'
import store from './../store/store.js'
import Toolbar from './Toolbar/Toolbar'
import ProjectList from './ProjectList/ProjectList'

const Portfolio = () => {
  let [filter, setFilter] = useState('')
  let [list, setList] = useState(store.projects)

  const onSelectFilter = (filter) => {
    setFilter(filter);
    setList((newlist) => {
      if (filter.nameBtn === 'All') {
        return [...store.projects]
      } else {
        return [...store.projects].filter((item) =>
          item.category.includes(filter.nameBtn)
        )
      }
    })
  }

  return (
    <div className={s.container}>
      <Toolbar filters={store.filters} onSelectFilter={onSelectFilter} />
      <ProjectList projects={list} filter={filter} />
    </div>
  )
}

export default Portfolio


