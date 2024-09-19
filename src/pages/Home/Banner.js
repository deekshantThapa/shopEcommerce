import bannerImg from '../../assets/img/banner-img.png';

export default function Banner() {
  return (
    <section className="banner">
        <div className="container">
          <div className="banner-content-wrap">
            <div className="banner-content">
              <h2 className="entry-title">Find clothes that matches your style</h2>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className="btn-primary">Shop Now</button>
            </div>
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}