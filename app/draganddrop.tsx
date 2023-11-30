'use client'

import { Dropzone, ExtFile } from '@files-ui/react'
import { useState } from 'react'

export const DragAndDrop = ({ transformImageToCode }: { transformImageToCode: (file: File) => Promise<void> }) => {
	const updateFiles = (files: ExtFile[]) => {
		const file = files[0].file
		if (file != null) transformImageToCode(file)
	}

	return (
		<Dropzone
			header={false}
			footer={false}
			maxFiles={1}
			label="Arrastra aquí tu captura de pantalla"
			accept="image/*"
			onChange={updateFiles}
		/>
	)
}
