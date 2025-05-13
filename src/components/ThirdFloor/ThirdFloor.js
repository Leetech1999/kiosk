import React, { useState } from 'react';
import './ThirdFloor.css';

function ThirdFloor() {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const departments = [
        { id: 'a_1', name: '신경외과', x: 180, y: 30 },
        { id: 'a_2', name: '심장내과', x: 1005, y: 500 },
        { id: 'a_3', name: '심장혈관흉부외과', x: 1185, y: 270 },
        { id: 'a_4', name: '안과', x: 785, y: 30 },
        { id: 'a_5', name: '영상의학과', x: 400, y: 460 },
        { id: 'a_6', name: '외과', x: 570, y: 250 },
        { id: 'a_7', name: '입원의학과', x: 805, y: 500 },
        { id: 'a_8', name: '정신건강의학과', x: 600, y: 490 },
        { id: 'a_9', name: '진단검사의학과', x: 800, y: 265 },
        { id: 'a_10', name: '알레르기내과', x: 180, y: 460 },
        { id: 'a_11', name: '임상약리학과', x: 540, y: 30 }
    ];

    const ButtonClick = (departmentId) => {
        setSelectedDepartment(prevSelected =>
            prevSelected === departmentId ? null : departmentId
        );
    };

    const selectedDept = departments.find(dept => dept.id === selectedDepartment);

    return (
        <div>
            <div className="header">
                <h1>층별 안내도</h1>
                <h2>3층 안내도</h2>
                <span></span>
            </div>
            <div className="floorInfoWrap">
                <div className="svg_container">
                    <svg width="1300" height="630" viewBox="0 0 1500 740" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="1200" height="700" stroke="#333" strokeWidth="2" fill="none" />
                        <g transform="translate(-150, 0)">
                            <rect x="180" y="30" width="240" height="200" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_1.png" x="200" y="40" width="200" height="180" />

                            <rect x="430" y="30" width="100" height="100" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/toilet.png" x="435" y="35" width="90" height="90" />

                            <rect x="180" y="280" width="40" height="70" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/floor.png" x="175" y="285" width="50" height="60" />

                            <rect x="1005" y="500" width="340" height="190" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_2.png" x="1065" y="505" width="220" height="180" />

                            <rect x="1165" y="270" width="180" height="210" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_3.png" x="1155" y="290" width="200" height="180" />

                            <rect x="1305" y="180" width="40" height="70" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/floor.png" x="1300" y="185" width="50" height="60" />

                            <rect x="785" y="30" width="200" height="200" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_4.png" x="785" y="40" width="200" height="180" />

                            <rect x="995" y="30" width="100" height="100" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/toilet.png" x="1000" y="35" width="90" height="90" />

                            <rect x="1105" y="30" width="240" height="130" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/info3.png" x="1145" y="25" width="160" height="130" />

                            <rect x="400" y="460" width="180" height="230" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_5.png" x="380" y="490" width="220" height="180" />

                            <rect x="375" y="270" width="100" height="70" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/elevator.png" x="380" y="260" width="90" height="90" />

                            <rect x="440" y="345" width="35" height="35" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/fire.png" x="442" y="348" width="28" height="28" />

                            <rect x="570" y="250" width="170" height="180" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_6.png" x="550" y="255" width="210" height="170" />

                            <rect x="805" y="500" width="180" height="190" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_7.png" x="785" y="505" width="220" height="180" />

                            <rect x="600" y="490" width="190" height="200" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_8.png" x="580" y="500" width="220" height="180" />

                            <rect x="800" y="265" width="160" height="190" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_9.png" x="770" y="270" width="220" height="180" />

                            <rect x="1005" y="270" width="100" height="70" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/elevator.png" x="1010" y="260" width="90" height="90" />

                            <rect x="1070" y="345" width="35" height="35" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/fire.png" x="1072" y="348" width="28" height="28" />

                            <rect x="180" y="460" width="200" height="230" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_10.png" x="170" y="490" width="220" height="180" />

                            <rect x="540" y="30" width="240" height="200" stroke="#333" strokeWidth="1" fill="none" />
                            <image href="/images/d_11.png" x="550" y="40" width="220" height="180" />

                            {selectedDept && (
                                <image
                                    href="/images/point.png"
                                    x={selectedDept.x + 80}
                                    y={selectedDept.y - 20}
                                    width="40"
                                    height="40"
                                />
                            )}
                        </g>
                    </svg>
                </div>
                <div className="button_container">
                    <h3>진료과목</h3>
                    {departments.map(department => (
                        <button
                            key={department.id}
                            onClick={() => ButtonClick(department.id)}
                            className={selectedDepartment === department.id ? 'active' : ''}
                        >
                            {department.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThirdFloor;
