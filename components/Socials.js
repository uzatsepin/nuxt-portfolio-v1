import Link from 'next/link'

import {RiGithubLine, RiInstagramLine, RiTelegramLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-3xl'>
    <Link href={'/'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={'/'} className='hover:text-accent transition-all duration-300'>
      <RiTelegramLine />
    </Link>
    <Link href={'/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
  </div>
  );
};

export default Socials;
