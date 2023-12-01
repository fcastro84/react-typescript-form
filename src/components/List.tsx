import {Data} from "../interfaces/interfaces";


interface Props {
    subs: Partial<Data>[];
}

export const List  = ( {subs}: Props ) => {
    return (
        <>
            <ul>
                {
                    subs.map( data => {
                        return (<li key={data.nick}>
                            <img src={data.avatar} alt={`Avatart for ${data.nick}`}/>
                            <h4> {data.nick}  (<small>{data.subMonths}</small>) </h4>
                            <p>{data.description?.substring(0,100)}</p>
                        </li>)
                    })
                }

            </ul>
        </>
    );
};
