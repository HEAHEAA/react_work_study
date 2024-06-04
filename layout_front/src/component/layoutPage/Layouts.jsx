import {LayoutData, UpdateLayout} from "../../hook/layout/UseLayoutStatus.jsx";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {useEffect, useState} from "react";

export const Layouts = () => {
    const {isLoading: layoutLoading, data: layoutList, isError: layoutError} = LayoutData();

    const [dragOpen,setDragOpen] = useState(false);
    const [layout,setLayout] = useState(null);
    const resetLayout = [
        { i: 'a', x: 0, y: 0, w: 5, h: 2 },
        { i: 'b', x: 0, y: 0, w: 5, h: 2 },
        { i: 'c', x: 0, y: 0, w: 5, h: 2 }
    ]

    useEffect(() => {
        if (layoutList && layoutList.data && layoutList.data.data) {
            const newLayout = layoutList.data.data.map(item => ({
                i: item.i,
                x: item.x,
                y: item.y,
                w: item.w,
                h: item.h,
                isDraggable: dragOpen,
                isResizable: dragOpen
            }));
            setLayout(newLayout);
        } else {

            setLayout([]); // layoutList 데이터가 없을 때 빈 배열로 설정
        }
    }, [layoutList, dragOpen]);




    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout); // 항상 동일한 순서로 호출되도록 보장
    };


    const handleUpdateLayout = () => {
        for(let i = 0 ; i<layout.length; i++){
            let updateValue= {
                i: layout[i].i,
                x: layout[i].x,
                y: layout[i].y,
                w: layout[i].w,
                h: layout[i].h,
            }
            UpdateLayout(i+1,  updateValue);
        }
    }


    if (layoutLoading) return <div>잠시만 기다려주세요.</div>
    if(layoutError) return <div>에러가 발생 되었습니다.</div>
    return (
        <div>
            <br/>
            <button style={{marginLeft: 10}} onClick={() => {
                setDragOpen(true);
            }}>화면 편집</button>
            <button style={{marginLeft: 10}}  onClick={() => {
                handleUpdateLayout();
                alert('저장 완료');
            }}> 화면 저장하기</button>
            <button style={{marginLeft: 10}} onClick={()=> {
                setLayout(resetLayout);
                setDragOpen(false);
                handleUpdateLayout();
            }}>
                화면 초기화
            </button>

            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1920}
                onLayoutChange={handleLayoutChange}
            >
                {layout?.map(item => (
                    <div key={item.i} style={{ border: '1px solid black', position: 'relative' }}>
                        <div style={{ padding: '10px', marginTop: '30px' }}>
                            {item.i} (드래그 핸들러 사용)
                        </div>
                    </div>
                ))}
            </GridLayout>
        </div>
    )
}
