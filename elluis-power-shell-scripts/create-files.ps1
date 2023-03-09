$files = "_alerts.scss", "_buttons.scss", "_cards.scss", "_forms.scss", "_headers.scss", "_icons.scss", "_images.scss", "_inputs.scss", "_modals.scss", "_navigation.scss", "_pagination.scss", "_panels.scss", "_tables.scss", "_tooltips.scss"

foreach( $file in $files ) {
	New-Item -ItemType "file" $file
}