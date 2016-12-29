import React from 'react';

export default class DSVisualization extends React.Component {
    componentDidMount() {
        let stage = new createjs.Stage("ds-visualization");
        let rect = new createjs.Shape();

        rect.graphics.beginFill("#E1E5EC").drawRect(0, 0, 100,100);
        rect.addEventListener("click", function(event) {
           console.log("Click");
        });
        stage.addChild(rect);
        stage.update();
    }
    render() {
        return (
            <div className="portlet solid green-soft">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="fa fa-picture-o"></i> Visualization
                    </div>
                    <div className="tools">
                        <a href="" className="fullscreen"> </a>
                    </div>
                </div>
                <div className="portlet-body">
                    <canvas id="ds-visualization" width={450} height={330}></canvas>
                </div>
            </div>
        );
    }


}

