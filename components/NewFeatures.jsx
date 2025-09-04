import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle,link }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] transition-transform duration-300 ease-out
            hover:scale-125 hover:translate-y-[-4px] hover:drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain transition-transform duration-300 ease-out
             hover:scale-125 hover:translate-y-[-4px] hover:drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)]"
        onClick={(e) => {
          e.stopPropagation();
          window.open(link, '_blank');
        }}
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
