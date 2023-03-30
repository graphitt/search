import { TextInput } from 'flowbite-react';
import { MagnifyingGlassIcon } from '../../Icons/MagnifyingGlass';
import React from 'react';

interface SearchInputProps {
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchInput = ({onChange}: SearchInputProps): JSX.Element => {
	return (
		<TextInput placeholder='Search business entries...' rightIcon={MagnifyingGlassIcon} onChange={onChange}/>
	);
};