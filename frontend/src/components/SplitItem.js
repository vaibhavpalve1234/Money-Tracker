const SplitItemList = () => {
    return (
        <div>
            <form>
                <div>
                    <label for="cars">Choose a PayerId:</label>
                    <select id="cars">
                        <option value="123">123</option>
                        <option value="32">32</option>
                        <option value="234">234</option>
                        <option value="43">43</option>
                    </select>
                </div>
                <div>
                    <label for="cars">Choose a category:</label>
                    <select id="cars">
                        <option value="food">Food</option>
                        <option value="pen">Pen</option>
                        <option value="Water">Water</option>
                        <option value="None">None</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default SplitItemList;