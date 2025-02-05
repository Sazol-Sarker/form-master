import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name,gift}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p className="my-2">{name}</p>
            
            {
                gift && <Special gift={gift}></Special>
            }
            {

                name==='Tisi'&& <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;