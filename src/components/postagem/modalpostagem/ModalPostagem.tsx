import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormPostagem from "../formpostagem/FormPostagem";

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={ //gatilho
                    <button
                        className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
                            Nova Postagem
                    </button>
                }
                modal //ocupa o centro da tela e exibe o overlay(fundo escurecido)
                contentStyle={{
                    borderRadius: '1rem', //borda externa
                    paddingBottom: '2rem' // espaçamento inferior
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;