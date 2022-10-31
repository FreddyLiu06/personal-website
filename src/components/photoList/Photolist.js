import "./Photolist.scss"

const Photolist = ({title, active, setSelected, id}) => {
  return (<a href="#">
    <li className={active ? "photolist active" : "photolist"} onClick={() => setSelected(id)}>
        {title}
    </li></a>
  )
}

export default Photolist