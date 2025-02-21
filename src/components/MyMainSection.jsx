import MySong from "./MySong";

const MyMainsSection = () => {
  return (
    <>
      <main className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock section</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 imgLinks py-3" id="rockSection">
                <MySong artistName="Metallica" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop section</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 imgLinks py-3" id="popSection">
                <MySong artistName="Michael Jackosn" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>Rap section</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                <MySong artistName="yung lean" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default MyMainsSection;
