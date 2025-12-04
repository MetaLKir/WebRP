import type {FC} from "react";


const MyComponent: FC = () => {
    let title = "old title";
    (function () {
        setTimeout(() => {
            title = "hello";
            console.log("all done")
        }, 1000)
    })();
    return (
        <div>
            {title}
        </div>
    );
};

export default MyComponent;