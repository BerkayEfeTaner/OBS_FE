import React, {useEffect, useState} from "react"import "devextreme/dist/css/dx.light.css"import PropTypes from "prop-types"import {useLocation, withRouter} from "react-router-dom"import {withTranslation} from "react-i18next"import {Col, Container, Row} from "reactstrap"import CustomBreadcrumbs from "../../components/breadcrumbs"import {getAllClassesService, getClassesInfoService} from "../../services/class/classService";const ClassPage = props => {    const location = useLocation();    let params = new URLSearchParams(location.search)    const [veri, setVeri] = useState({})    const [veri2, setVeri2] = useState({          id:'',    })    useEffect(() => {        getAllClassesService(params.get("id")).then(veri => {            setVeri(veri)        })    }, [params.get("id")]);    useEffect(()=>{        getClassesInfoService(params.get("id")).then(veri2 =>{                setVeri2((veri2))        })        },[params.get("id")]);    console.log(veri)    console.log(veri2)    return (        <React.Fragment>            <div className="page-content">                <Container fluid className="dash">                    <div>                        <CustomBreadcrumbs                            breadcrumbItems={[{title: props.t("Classes"), url: "/classes"}]}/>                    </div>                    <div className="mt-2">                        <Row>                            <Col xl={7}>                                <div className="p-3 bg-white rounded-2">                                    Classes {veri.name}                                    <div>                                     Ders id:{veri2?.classes_id}                                    </div>                                    <div>                                        Ders Adı:{veri2?.classes_name}                                    </div>                                    <div>                                        Fakülte ID:{veri2?.faculty_id}                                    </div>                                    <div>                                        Sınıf:{veri2?.class}                                    </div>                                    <div>                                        Eklenme Tarihi:{veri2?.created_at}s                                    </div>                                </div>                            </Col>                            <Col xl={5}>                                <div className="p-3 bg-white rounded-2">                                    <div>                                        <div className="text-center">                                            <h5>Ders Açıklaması</h5>                                        </div>                                        <Row>                                            <Col xl={8}>                                                <div style={{lineHeight: '2'}}>                                                    <div className="mt-2">                                                        <span className="fw-semibold">Ders Adı:</span> {veri.name}                                                    </div>                                                    <div>                                                        <span className="fw-semibold">Ders sınıfı:</span> {veri.class}                                                    </div>                                                    <div>                                                        <span                                                            className="fw-semibold">Öğretmen Adı:</span>{veri.teacher_id}                                                    </div>                                                    <div>                                                        <span                                                            className="fw-semibold">Öğretmen Soyadı:</span>{veri.teacher_id}                                                    </div>                                                    <div>                                                       <span                                                           className="fw-semibold"> Öğretmen Mail Adresi:</span>{veri.teacher_id}                                                    </div>                                                    <div>                                                        <span                                                            className="fw-semibold"> Derse Katılan Öğrenci Sayısı:</span> 31                                                    </div>                                                </div>                                            </Col>                                            <Col xl={4} className="align-self-center">                                                <img alt="atınç yılmaz" className="img-thumbnail rounded-4"                                                     src="https://mmf.beykent.edu.tr/images/default-source/akademik-kadro/muhendislik-ve-mimarl%C4%B1k-fakultesi/atinc-yilmaz.jpg?sfvrsn=3964d35_14"/>                                            </Col>                                        </Row>                                    </div>                                </div>                            </Col>                        </Row>                    </div>                </Container>            </div>        </React.Fragment>    );};ClassPage.propTypes = {    location: PropTypes.any,    t: PropTypes.any,};export default withRouter(withTranslation()(ClassPage));