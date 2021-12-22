import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSomeData } from "./action";
import "./style.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <div className="logo-img">
					<img src="/images/react.svg" role="img" alt="logo" />
				</div> */}
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="">Remember Everything</h1>
            <h1>With Us</h1>
            <button
              className="get_start_btn btn btn-outline-primary"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="col-6">
            <img
              src="/images/welcome2.png"
              className="img-fluid"
              role="img"
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  someData: state.homeReducer.someData,
});

const mapDispatchToProps = (dispatch) => ({
  getSomeData: bindActionCreators(getSomeData, dispatch),
});

function loadHomeData({ store }) {
  return Promise.all([
    store.dispatch(getSomeData()) /* store.dispatch(getWhatWeDoList()) */,
  ]);
}

export { loadHomeData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
