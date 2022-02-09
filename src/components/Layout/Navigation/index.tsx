import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { routes } from "src/routes";
import * as S from "./Navigation.styled";
import { linksMapper } from "./service/navLinksMapper";

const Navigation = () => {
  const router = useRouter();
  return (
    <S.NavContainer>
      <S.NavList>
        {routes.map((route) => {
          return (
            <S.NavListItem className={linksMapper[router.pathname] === route.path ? "active" : ""} key={route.label}>
              <Link passHref href={route.path}>
                <S.NavListItemLink>{route.label}</S.NavListItemLink>
              </Link>
            </S.NavListItem>
          );
        })}
      </S.NavList>
    </S.NavContainer>
  );
};

export default Navigation;
