import s from'./style.module.css';


const Layout = ({ hideBackground = false, title, descr, id }) => {

  const styleRoot = hideBackground ? { backgroundImage: "none" } : {};
    return (
    <>
        <section
          style={ styleRoot}
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
                      <p>{descr}</p>
                  </div>
              </article>
          </div>
      </section>
    </>
  )
}

export default Layout;
