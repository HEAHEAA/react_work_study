import GridLayout from 'react-grid-layout';
import {layout} from './defaultLayout.jsx';

const MyGrid = () => {
    const onLayoutChange = (newLayout) => {
        console.log(newLayout);
    };

    return(
        <div>
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1920}
                onLayoutChange={onLayoutChange}
            >
                <div key="a"></div>
                <div key="b"></div>
                <div key="c"></div>
            </GridLayout>
        </div>
    )
}
export default MyGrid;
