import React, { useEffect } from 'react';

const { kakao } = window;


const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(36.69908607620302, 127.43617799451643),
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

export default MapContainer;


