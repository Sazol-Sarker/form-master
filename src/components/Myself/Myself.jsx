import Special from "../Special/Special";

const Myself = ({gift}) => {
    return (
        <div>
            <h2>Myself </h2>
            <Special gift={gift}></Special>
        </div>
    );
};

export default Myself;