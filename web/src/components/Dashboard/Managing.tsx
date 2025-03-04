import { UserConfig } from "../../hooks/useUserConfig";
import { store } from "../../store";

export function Managing({ userConfig }: { userConfig: UserConfig | null | undefined }) {
    if (userConfig?.Protected.EditorFor.length === 0) {
        return null;
    }
    const managing = store.useState(s => s.managing);

    return <div className="Managing">
        <select className="bg-gray-800 shadow rounded p-3" onChange={e => store.update(s => { s.managing = e.target.value })} value={managing}>
            {userConfig?.Protected.EditorFor.map(editorFor => <option key={editorFor} value={editorFor}>{editorFor}</option>)}
            <option value="">you</option>
        </select>
    </div>
}