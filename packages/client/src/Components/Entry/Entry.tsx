interface EntryProps {
	header: string;
	content: JSX.Element[] | string | undefined;
}

export const Entry = ({header, content}: EntryProps) => 
	<div>
		<span className='text-2xl'>{ header }</span>
		<div className='text-gray-500 pl-12 text-xl'>{ content }</div>
	</div>;