import React, {useEffect, useState} from "react"import "devextreme/dist/css/dx.light.css"import PropTypes from "prop-types"import {useLocation, withRouter} from "react-router-dom"import {withTranslation} from "react-i18next"import {Col} from "reactstrap"import {completeClassesService, getClassesInfoService} from "../../../services/class/classService";const Courses = props => {    const location = useLocation();    let params = new URLSearchParams(location.search)    const [currentClasses, setCurrentClasses] = useState(null)    useEffect(() => {        getClassesInfoService(params.get("id")).then(response => {            setCurrentClasses(response)        })    }, [params.get("id")]);    return (        <React.Fragment>            <Col xl={7}>                <div className="p-3 rounded-2">                    {!currentClasses ?                        <div>                            <div className="d-flex p-3 align-items-center"                                 style={{                                     backgroundColor: "#02203e",                                     borderRadius: "6px 6px 0 0"                                 }}>                                <div className="font-size-18 fw-500">                                    <i className="mdi mdi-chart-bar me-3 text-white"></i>                                    <span className="text-white">                                        İlgili Derste Veri Yok                                    </span>                                </div>                            </div>                        </div>                        :                        currentClasses.map((item, index) => {                            return (                                <div key={index} className="shadow mt-1">                                    <div className="d-flex p-3 align-items-center"                                         style={{                                             backgroundColor: "#02203e",                                             borderRadius: "6px 6px 0 0"                                         }}>                                        <div className="font-size-18 fw-500">                                            <i className="mdi mdi-chart-bar me-3 text-white"></i>                                            <span className="text-white">{index + 1}. {props.t("Week")}</span>                                        </div>                                    </div>                                    <div className="bg-white p-3">                                        <div>                                            {item.map((item, index) => {                                                return (                                                    <div key={index} className="mt-1">                                                        <a href={item.url} target="_blank"                                                           rel="noopener noreferrer"                                                           onClick={() => {                                                               completeClassesService(params.get("id"), item.id)                                                           }}                                                           className="d-flex align-items-center">                                                            <div                                                                className="d-flex align-items-center me-2">                                                                <div className="d-flex">                                                                    <i className={`${item.type ? "fas fa-users bg-primary" : "fas fa-file-archive bg-warning"} avatar-classes font-size-24 align-middle me-1 text-white p-1 rounded-2`}/>                                                                </div>                                                            </div>                                                            <div                                                                className={`${item.type ? "text-primary" : "text-warning"} font-size-14 fw-semibold`}>{item.title}</div>                                                        </a>                                                        <div>                                                            <span>{item.description}</span>                                                        </div>                                                    </div>                                                )                                            })}                                        </div>                                    </div>                                </div>                            )                        })}                </div>            </Col>        </React.Fragment>    )        ;}Courses.propTypes = {    location: PropTypes.any,    t: PropTypes.any,};export default withRouter(withTranslation()(Courses));