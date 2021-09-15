import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

interface IMasterBanner {
  img?: string,
  title?: string,
  desc?: string,
  link: string,
  classes?: string,
  btn?: string,
  btnClass?: string
}

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }: IMasterBanner) => {
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1>{desc}</h1>
                  <Link href={link}>
                    <a className={`btn btn-solid ${btnClass ? btnClass : ""}`}>
                      {btn ? btn : "Shop Now"}{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;
