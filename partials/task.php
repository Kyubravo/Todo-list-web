<li>
    <div>
        <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
            <div>
                <span class="font-monospace"><?= $taskId?>- </span>
                <label class="form-check-label" for="${task.id}">
                <?=$taskName?>
                </label>
            </div>
            <form action="" method="post" id=<?= $taskId ?>>
                <input class="form-check-input" type="checkbox" name="checkbox" value="<?= $taskId ?>" onchange="tickChange(<?= $taskId ?>);" <?= $is_complete === 1 ? "checked" : ""; ?>>
            </form>
        </div>
    </div>
    <hr>
</li>
