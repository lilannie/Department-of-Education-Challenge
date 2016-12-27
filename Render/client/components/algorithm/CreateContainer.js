import React from 'react';

export default class CreateContainer extends React.Component {
    render() {
        return (
            <div className="content-fluid">
                <div className="page-content">
                    <div className="page-content-container">
                        <div className="page-content-row">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="portlet box red-sunglo">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <i className="fa fa-gift"></i>Nestable Portlets
                                            </div>
                                            <div className="tools">
                                                <a href="javascript:;" className="collapse"> </a>
                                                <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                                <a href="javascript:;" className="reload"> </a>
                                                <a href="" className="fullscreen"> </a>
                                                <a href="javascript:;" className="remove"> </a>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <p>
                                                <strong>Scroll is hidden</strong>
                                                <br/>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                                                eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                                fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor
                                                ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
                                                sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat
                                                porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
                                                consectetur purus sit amet fermentum. Duis mollis, est non commodo
                                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
                                                mattis consectetur purus sit amet fermentum.
                                            </p>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="portlet box red">
                                                        <div className="portlet-title">
                                                            <div className="caption">
                                                                <i className="fa fa-gift"></i>Portlet
                                                            </div>
                                                            <ul className="nav nav-tabs">
                                                                <li>
                                                                    <a href="#portlet_tab_3" data-toggle="tab"> Tab
                                                                        3 </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#portlet_tab_2" data-toggle="tab"> Tab
                                                                        2 </a>
                                                                </li>
                                                                <li className="active">
                                                                    <a href="#portlet_tab_1" data-toggle="tab"> Tab
                                                                        1 </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="portlet-body">
                                                            <div className="tab-content">
                                                                <div className="tab-pane active" id="portlet_tab_1">
                                                                    <p> Duis autem vel eum iriure dolor in hendrerit in
                                                                        vulputate velit esse molestie consequat, vel
                                                                        illum dolore eu feugiat nulla facilisis at vero
                                                                        eros et accumsan et iusto odio dignissim
                                                                        qui blandit praesent luptatum zzril delenit
                                                                        augue duis dolore te feugait nulla facilisi.
                                                                        Lorem ipsum dolor sit amet, consectetuer
                                                                        adipiscing elit, sed diam nonummy nibh euismod
                                                                        tincidunt ut laoreet dolore magna aliquam erat
                                                                        volutpat.ut laoreet dolore magna ut laoreet
                                                                        dolore magna. ut laoreet dolore magna. ut
                                                                        laoreet dolore magna. </p>
                                                                </div>
                                                                <div className="tab-pane" id="portlet_tab_2">
                                                                    <p> Lorem ipsum dolor sit amet, consetetur
                                                                        sadipscing elitr, sed diam nonumy eirmod tempor
                                                                        invidunt ut labore et dolore magna aliquyam
                                                                        erat, sed diam voluptua. At vero eos et accusam
                                                                        et justo duo dolores et ea rebum. Stet clita
                                                                        kasd gubergren, no sea takimata sanctus est
                                                                        Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                                                        sit amet, consetetur sadipscing elitr, sed
                                                                        diam nonumy eirmod tempor invidunt ut labore et
                                                                        dolore magna aliquyam erat, sed diam voluptua.
                                                                        At vero eos et accusam et justo. </p>
                                                                </div>
                                                                <div className="tab-pane" id="portlet_tab_3">
                                                                    <p> Ut wisi enim ad btn-smm veniam, quis nostrud
                                                                        exerci tation ullamcorper suscipit lobortis nisl
                                                                        ut aliquip ex ea commodo consequat. Duis autem
                                                                        vel eum iriure dolor in hendrerit in vulputate
                                                                        velit esse molestie consequat, vel illum dolore
                                                                        eu feugiat nulla facilisis at vero eros et
                                                                        accumsan et iusto odio dignissim qui blandit
                                                                        praesent luptatum zzril delenit augue duis
                                                                        dolore te feugait nulla facilisi. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="portlet solid grey-cascade">
                                                        <div className="portlet-title">
                                                            <div className="caption">
                                                                <i className="fa fa-gift"></i>Portlet
                                                            </div>
                                                            <div className="actions">
                                                                <a href="javascript:;" className="btn default btn-sm">
                                                                    <i className="fa fa-pencil icon-black"></i> Edit
                                                                </a>
                                                                <div className="btn-group">
                                                                    <a className="btn btn-sm red" href="javascript:;"
                                                                       data-toggle="dropdown">
                                                                        <i className="fa fa-user"></i> User
                                                                        <i className="fa fa-angle-down "></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu pull-right">
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <i className="fa fa-pencil"></i> Edit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <i className="fa fa-trash-o"></i> Delete
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <i className="fa fa-ban"></i> Ban </a>
                                                                        </li>
                                                                        <li className="divider"></li>
                                                                        <li>
                                                                            <a href="javascript:;"> Make admin </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="portlet-body"> Duis mollis, est non commodo
                                                            luctus, nisi erat porttitor ligula, eget lacinia odio sem
                                                            nec elit. Cras mattis consectetur purus sit amet fermentum.
                                                            est non commodo luctus, nisi erat porttitor
                                                            ligula, eget lacinia odio sem nec elit. Cras mattis
                                                            consectetur purus sit amet fermentum. nisi erat porttitor
                                                            ligula, eget lacinia odio sem nec elit. Cras mattis
                                                            consectetur purus sit amet
                                                            fermentum.nisi erat porttitor ligula, eget lacinia odio sem
                                                            nec elit. nisi erat porttitor ligula, eget lacinia odio sem
                                                            nec elit. nisi erat porttitor ligula, eget lacinia odio sem
                                                            nec elit.
                                                            Cras mattis consectetur purus sit amet fermentum
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
