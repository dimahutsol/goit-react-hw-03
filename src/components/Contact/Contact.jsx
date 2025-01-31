import clsx from 'clsx';
import s from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';

const Contact = ({ item, handleDeleteContact }) => {
	return (
		<div className={clsx(s.item)}>
			<div className={clsx(s.mainPart)}>
				<div className={clsx(s.line)}>
					<span className={clsx(s.icon)}>
						<FaUser />
					</span>
					<p className={clsx(s.text)}>{item.name}</p>
				</div>
				<div className={clsx(s.line)}>
					<span className={clsx(s.icon)}>
						<FaPhone />
					</span>
					<p className={clsx(s.text)}>{item.number}</p>
				</div>
			</div>
			<div className={clsx(s.bts)}>
				<button
					className={clsx(s.btn)}
					onClick={() => handleDeleteContact(item.id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Contact;
