import emag1 from "../assets/emag1cover.png";
import emag2 from "../assets/emag2cover.png";
import TimelineEmag from "../utils/Timeline.jsx";
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is present

const Emag = () => {
    return (
        <TimelineEmag/>
        /* <div className="art-container">
            <div className="art-box">
                <div className="back">
                    <Link to="/">
                        <span>BACK</span>
                    </Link>
                </div>
                <div className="art-tab">
                    <div className="emag" data-tab-value="1">
                        <p>電子雜誌</p>
                    </div>
                </div>
                <div className="child-tab">
                    <div className="child-tab-item active" data-child-tab-value="1">PC版</div>
                    <div className="list-box">
                        <input type="hidden" name="now_sn" value="1"/>
                        <div className="list w-horizontal">
                            <div className="item page_1_1" data-sn="176" style={{ textAlign: "center" }}>
                                <img src={emag1} alt="" srcset=""/>
                            </div>
                            <div className="item page_1_1" data-sn="175" style={{ textAlign: "center" }}>
                                <img src={emag2} alt="" srcset=""/>
                            </div>
                            <input type="hidden" name="tab-value4" value="1"/>
                        </div>
                        <div className="list mmd">
                            <input type="hidden" name="tab-value5" value="0"/>
                        </div>
                    </div>
                    <ul className="page-icons">
                        <li className="page-icons-item this_page active" data-currentpage_tmp="1"></li>
                        <li className="page-icons-item this_page" data-currentpage_tmp="2"></li>
                        <li className="page-icons-item this_page" data-currentpage_tmp="3"></li>
                    </ul>
                    <div className="pagination">
                        <div className="prev"></div>
                        <div className="pagination-num">
                            <div className="num">
                                <span className="current-page">1</span>/<span className="total-page">3</span>
                            </div>
                            <span className="text">PAGE</span>
                        </div>
                        <div className="next"></div>
                    </div>
                </div>
            </div>
        </div> */
    );
}

export default Emag;
