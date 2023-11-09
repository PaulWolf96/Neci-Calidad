import '../styles/linksDownload.css';

const LinksDownload = () => {
  return (
    <div className="container-links-download">
      <section className='section-online'>
        <h5>VER ONLINE</h5>
        <div>
          <p className='p-links'>Audio <strong>Latino</strong></p>
          <ul className='ul-links-download'>
            <li className='li-links-download'><button>Waaw</button></li>
            <li className='li-links-download'><button>Filemoon</button></li>
            <li className='li-links-download'><button>Streamtape</button></li>
            <li className='li-links-download'><button>Voe</button></li>
            <li className='li-links-download'><button>Sfastwish</button></li>
          </ul>
        </div>
        <br />
        <div>
          <p className='p-links'>Audio <strong>Inglés</strong></p>
          <ul className='ul-links-download'>
            <li className='li-links-download'><button>Waaw</button></li>
            <li className='li-links-download'><button>Filemoon</button></li>
            <li className='li-links-download'><button>Streamtape</button></li>
            <li className='li-links-download'><button>Voe</button></li>
            <li className='li-links-download'><button>Sfastwish</button></li>
          </ul>
        </div>
      </section>
      <section className='section-download'>
        <h5>DESCARGAR</h5>
        <p className='p-links'>Audio latino y original con subtitulos Full HD</p>
        <ul className='ul-links-download'>
          <li className='li-links-download'><button>Mega</button></li>
          <li className='li-links-download'><button>1fichier</button></li>
          <li className='li-links-download'><button>Utorrent</button></li>
        </ul>
      </section>
    </div>
  );
}

export default LinksDownload;