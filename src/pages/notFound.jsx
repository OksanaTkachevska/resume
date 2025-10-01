import { Header } from "../components/structure/header/header.jsx";
import { Main } from "../components/structure/main/main.jsx";

export function NotFound() {
    return (
        <>
            <Header />
            <Main>
                <h1>404 - Not Found</h1>
            </Main>
        </>
    );
}
