import CheckboxCard from "../../components/setup-card/CheckboxCard";
import NoCheckboxCard from '../../components/setup-card/NoCheckboxCard'
import { useRoute } from "@react-navigation/native";

//TODO: styling here for text is hard coded seperate from list so fix that at some point
//TODO: set callback function to set dev comments on button press from list
//TODO: add condition to render textbox on null and flatlist on not null


export default function UserSetupScreen(props) {
    const route = useRoute()
    let section = route.params.title
    return (
        <>
            {section === "Demographics" ?
                <NoCheckboxCard {...props} />
                :
                <CheckboxCard {...props} />
            }
        </>
    )
}
