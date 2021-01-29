import s from'./style.module.css';


const Layout = ({ title, id, urlBg, colorBg, children}) => {
const Style = {};
  if (urlBg) { Style.backgroundImage = `url(${urlBg})` }
  if (colorBg) { Style.backgroundColor = {colorBg}}
  
  
    return (
    <>
        <section
          style={Style}
          className={s.root}
          id={id}
      >
          <div  className={s.wrapper}>
              <article >
              <div className={s.title}>
                    <h3>{title}</h3>
                    <span className={s.separator}></span>
                  </div>
                  <div className={s.descFull} >
                   {children}
                  </div>
              </article>
          </div>
      </section>
    </>
  )
}

export default Layout;
