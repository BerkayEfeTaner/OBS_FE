import React from "react"import "devextreme/dist/css/dx.light.css"import PropTypes from "prop-types"import {withRouter} from "react-router-dom"import {withTranslation} from "react-i18next"import {Container} from "reactstrap"import CustomBreadcrumbs from "../../components/breadcrumbs"const ClassPage = props => {    return (      <React.Fragment>          <div className="page-content">            <Container fluid className="dash">              <div>                <CustomBreadcrumbs                  breadcrumbItems={[{title: props.t("Classes"), url: "/classes"}]}/>              </div>              <div className="bg-white rounded-2 mt-2">                Classes              </div>            </Container>          </div>      </React.Fragment>    );};ClassPage.propTypes = {  location: PropTypes.any,  t: PropTypes.any,};export default withRouter(withTranslation()(ClassPage));