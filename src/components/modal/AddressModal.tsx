import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import SearchPost from 'react-daum-postcode';
import { Box, Button } from '@mui/material';
import { fullAddressAtom, extraAddressAtom } from '@recoils/Address';
import { useSetRecoilState } from 'recoil';

interface AddressModalProps {
	isOpenModal: boolean;
	handleCloseModal: any;
}

export const AddressModal = (props: AddressModalProps) => {

	const { isOpenModal, handleCloseModal } = props;
	const setFullAddress = useSetRecoilState(fullAddressAtom);
	const setExtraAddress = useSetRecoilState(extraAddressAtom);

	const modalStyle = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 'auto',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		pt: 2,
		px: 4,
		pb: 3,
	};

	const onComplete = (data: any) => {
		//여기서 address input값 전역변수로 설정하면될듯
		setFullAddress(data.address);
	}

	return (
		<>
			<Modal
				open={isOpenModal}
			>
				<Box sx={{ ...modalStyle }}>
					<SearchPost onClose={handleCloseModal} onComplete={onComplete}/>
					<Button sx={{float: 'right'}} variant='outlined' onClick={handleCloseModal}>취소</Button>
        </Box>
			</Modal>
		</>
	)
}

AddressModal.prototype = {

}