import React from 'react';

interface IHelpCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function HelpCard({
  title,
  description,
  buttonText
}: IHelpCardProps): JSX.Element {
  return (
    <div>
      <div className='flex flex-col p-4 text-white bg-blue-500 rounded-lg pt-14 dark:bg-blue-500 gradienta'>
        {/* 
				.gradienta {
				background: linear-gradient(
						114.95deg,
						rgba(235, 0, 255, 0.5) 0%,
						rgba(0, 71, 255, 0) 34.35%
					),
					linear-gradient(180deg, #004b5b 0%, #ffa7a7 100%),
					linear-gradient(244.35deg, #ffb26a 0%, #3676b1 50.58%, #00a3ff 100%),
					linear-gradient(244.35deg, #ffffff 0%, #004a74 49.48%, #ff0000 100%),
					radial-gradient(100% 233.99% at 0% 100%, #b70000 0%, #ad00ff 100%),
					linear-gradient(307.27deg, #219d87 0.37%, #2650ba 50.19%, #2800c6 100%),
					radial-gradient(
						100% 140% at 100% 0%,
						#ff00c7 0%,
						#006c7a 49.48%,
						#760000 100%
					);
				background-blend-mode: hard-light, overlay, overlay, overlay, difference,
					difference, normal;
			}  */}
        <h1 className='text-lg font-bold'>{title}</h1>
        <p>{description}</p>
        <button
          type='button'
          className='mt-4 text-white myblur bg-opacity-70 hover:bg-opacity-90 transition-all bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30'>
          {/* .myblur {
						backdrop-filter: saturate(180%) blur(20px);
						-webkit-backdrop-filter: saturate(180%) blur(20px);
					} */}
          {buttonText}
        </button>
      </div>
    </div>
  );
}
