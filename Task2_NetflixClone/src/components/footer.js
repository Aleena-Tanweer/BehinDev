import FooterCss from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={FooterCss.container}>
        <div className={FooterCss.big_box}>
          <ul className={FooterCss.list}>
            <li>Questions? Contact us.</li>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <select className={FooterCss.lan_btn}>
            <option value="option1">English</option>
          </select>
          <p className={FooterCss.text}>Netflix Pakistan</p>
        </div>
        <div className={FooterCss.big_box}>
          <div>
            <ul className={FooterCss.list}>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>
        <div className={FooterCss.big_box}>
          <div>
            <ul className={FooterCss.list}>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
        </div>
        <div className={FooterCss.big_box}>
          <div>
            <ul className={FooterCss.list}>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
