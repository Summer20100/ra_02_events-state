import s from './ProjectList.module.css'

const ProjectList = ({ projects, filter }) => {

  let projectItem = [...projects].map((itm, ind) =>
    <div className={s.imgBox} category={itm.category} key={ind}>
      <img className={s.img} src={itm.img} alt='Фото' />
    </div>
  )

  return (
    <div className={s.container}>
      {projectItem}
    </div>
  )
}

export default ProjectList
