import React from 'react';
import type { ModalFieldType } from '../types/GeneralTypes';
import { BtnIconCard } from '../../../components/linkcards';
import { listIconCategory, type ICategory } from '../../../types/@types.financesParams';
import { Button } from '../../../components/buttons';

interface CategoryListProps {
  category: ICategory[],
  setModalType: React.Dispatch<React.SetStateAction<ModalFieldType>>,
  onSelectCategory?: (tx: ICategory) => void;
  setFilterCategoryType?: (tx: number) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  category,
  setModalType,
  onSelectCategory,
  setFilterCategoryType
}) => {
  const renderCategoryRow = (type: 1 | 2, title: string) => (
    <div className="contain">
      <h3 className="text-sm">{title}</h3>
      <div  className="listCardsSection">
        {category
          .filter((c) => c.type === type)
          .map((c) => (
            <BtnIconCard
              key={`${c.id}-${c.type}-${c.name}`}
              title={c.name}
              Icon={(() => {
                const Icon = listIconCategory[c.icon as keyof typeof listIconCategory];
                return Icon ? <Icon /> : undefined;
              })()}
              onClickFunc={() => {
                setModalType('categorie');
                if (onSelectCategory) onSelectCategory(c);
              }}
            />
          ))}
      </div>
      <div className="onClick btnList" onClick={() => {setModalType('newCategorie'); if(setFilterCategoryType) setFilterCategoryType(Number(type))}}>
      <Button
        importance="secondary"
        textBtn={"Ajouter une catégorie de " + ((type==1)? "dépense" : "revenu")}
        size="large"
      />
      </div>
    </div>
  );

  return <div className="contain-category">
    {renderCategoryRow(1, 'Dépenses')}
    {renderCategoryRow(2, 'Recettes')}
  </div>;
};