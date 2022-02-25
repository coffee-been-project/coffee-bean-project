import React, { useEffect } from 'react';

const { kakao } = window;


const KakaoMap = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(parseFloat(window.sessionStorage.getItem("cafe_location_y")),parseFloat(window.sessionStorage.getItem("cafe_location_x"))),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        const marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);


    }, []);

    return (
        <div id='myMap' style={{
            width: '250px',
            height: '250px'
        }}></div>
    );
}

export default KakaoMap;


