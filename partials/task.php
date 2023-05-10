<li>
    <div>
        <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
            <div>
                <span class="font-monospace">${i}- </span>
                <label class="form-check-label" for="${task.id}">
                ${task.name}
                </label>
            </div>
            <input class="form-check-input" type="checkbox" id="${task.id}" onchange="tickChange();" checked>
        </div>
    </div>
</li>