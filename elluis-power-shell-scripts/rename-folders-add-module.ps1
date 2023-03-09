#change as needed
$directory = "C:\Projects\elluis-next-development-build\styles\scss\components"



$foldersToRename = "_alerts.scss", "_buttons.scss", "_cards.scss", "_forms.scss", "_headers.scss", "_icons.scss"
$renamedSuffix = ".module.scss"

Get-ChildItem -Path $directory -Recurse -Directory | ForEach-Object {
	foreach ($folderToRename in $foldersToRename) {
		$oldName = Join-Path $_.FullName $folderToRename
		if (Test-Path $oldName) {
			$newName = Join-Path $_.FullName ($folderToRename -replace ".scss", $renamedSuffix)
			Rename-Item -Path $oldName -NewName $newName
		}
	}
}