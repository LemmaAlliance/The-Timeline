const data = {
  'lineImg':'./Img/line.png'
}

export default function Profile() {
  return (
    <>
      <div id="topMenu">
        <div className="wrap">
          <div id="topLinks">
            <ul>
              <li>
                <a href="./following/index.html">Following</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="line">
        <img src="./Img/line.png" alt="line" id="my-element" />
        <div className="item" id="Jan 28 2010 00:00:00">
          Hi
        </div>
        <div className="item" id="Jan 30 2010 00:00:00">
          Hi
        </div>
        <div className="item" id="Jan 30 2021 00:00:00">
          Hi
        </div>
      </div>
      <script type="text/javascript" src="./JS/index.js" async></script>
    </>
  );
}