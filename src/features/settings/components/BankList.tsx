import React from 'react';
import type { ModalFieldType } from '../types/GeneralTypes';
import { Button } from '../../../components/buttons';
import { BtnCard } from '../../../components/linkcards';
import type { IBank } from '../../../types/@types.financesParams';
import { balanceSpaces, formatBegginWord } from '../../../utils/stringManipulate';

interface BankListProps {
  bank: IBank[],
  setModalType: React.Dispatch<React.SetStateAction<ModalFieldType>>,
  onSelectBank?: (tx: IBank) => void;
}

export const BankList: React.FC<BankListProps> = ({
  bank,
  setModalType,
  onSelectBank,
}) => (
  <>
    <div className="listCardsSection">
      {bank.map((b) => 
      <BtnCard 
        key={`${b.id}-bank-setting`}
        title={b.label}
        subTitle={formatBegginWord(b.type)}
        Icon={b?.icon??"/logo.png"} 
        amount={`${balanceSpaces(Number(b.balance))}`}
        size='large'
        onClickFunc={() => {
          if(onSelectBank) onSelectBank(b);
          setModalType("bank")
        }}
      />
      )}
    </div>
    <div className="onClick btnList" onClick={() => setModalType('newBank')}>
      <Button
        importance="secondary"
        textBtn="Ajouter un compte"
        size="large"
      />
    </div>
  </>
  
);